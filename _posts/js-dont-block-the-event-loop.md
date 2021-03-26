---
title: "JS: Don't block the event loop"
excerpt: 'What does it mean when someone says to not block the event loop? In my early days of JavaScript programming I was posed with this question and it was one of the most significant ones in my learning process.'
coverImage: '/assets/blog/js-dont-block-the-event-loop/cover.jpg'
date: '2021-03-21'
author:
  name: Bruno Morgado (mstrk)
  picture: '/assets/blog/authors/mstrk.jpeg'
  git: https://github.com/mstrk?tab=repositories 
ogImage:
  url: '/assets/blog/js-dont-block-the-event-loop/cover.jpg'
---

In my early days of JavaScript programming, I stumbled upon a curious comment in an issue - "Don't block the event loop".

The problem was a processing function blocking an animation and the solution was to defer the execution of that function in a `setTimeout` with zero milliseconds.

~~~js
setTimeout(() => processFn(), 0)
~~~

That solution raised two questions in my head:
  - 1 - Why call setTimeout with zero delay? Wouldn't the function execute right after?
  - 2 - What is the event loop and why does it play a role here?

The answer to the first question is no, `setTimeout` is not a guaranteed time to execution but rather a minimum time to execution. But first we need to reason about how three things work together: call stack, Web APIs and the event loop.

## Call stack and Web APIs

The call stack, as the name implies, is where all our functions will be stacked and executed in an orderly fashion of last in, first out. The return value of the executed function will be available in the scope of the caller function.

With that in mind, we can assume the following output from a function composition.

~~~js
function printHello(name) {
  hello(name)
  welcome()

  return 0
}

function hello(name) {
  console.log(`hello ${name}!`)
}

function welcome() {
  console.log('welcome!')
}

printHello('Ana')
// console output:
// hello Ana!
// welcome!
// 0
~~~

But if we call `hello` in a `setTimeout`, even with `0` delay, the output order changes.

~~~js
function printHello(name) {
  setTimeout(() => {
    hello(name)
  }, 0) // defer hello

  welcome()

  return 0
}

{...}

printHello('Ana')
// console output:
// welcome!
// 0
// hello Ana!
~~~

The reason is that `setTimeout` is an asynchronous Web API, and asynchronous Web APIs don't return the callback directly back to the call stack. In turn, they make use of a callback queue that the event loop handles.

We finally get to know what exactly is this mysterious event loop.

## The event loop

We already know that the event loop handles a callback queue by following what setTimeout really does with our callback. So, by looking at what event loop is doing, we find out that it only has one job. To empty a callback queue back to the call stack, **one by one**, in orderly fashion of first in, first out. Every time our call stack becomes empty and until the callback queue becomes empty as well.

Call stack become empty -> push new callback -> callback executed and the call stack becomes empty again -> push new callback

Yes, that simple. Simple but nonetheless important for asynchronous programming.

But what does that have to do with the animation blocking?

The event loop is not the only one constrained by an empty call stack to be able to act. The browser paint also is. So, for a paint to happen, our call stack must be empty. If we think a bit further this also makes sense. The painting of a new screen is usually conditioned by the computed values made in the call stack. Painting when we only have half of our computations done for example, would bring unexpected results.

This is what the full flow looks like. Keep in mind that the browser will also have a chance to paint before the event loop pushes a new callback to the call stack.

<img src="/assets/blog/js-dont-block-the-event-loop/event-loop.gif" style="width: 100%; height: auto;" />

## Conclusion

Learning about the event loop was an important topic for me and a super important topic for beginners to know right from the start. Knowing the order by which your program is executed is crucial for you to reason about it.

I've learned how asynchronous code is made possible with a single threaded language and when someone says *"Don't block the event loop"*, I take it as to keep my stack executions as fast as possible and ultimately, if the execution is not relevant for the next paint, maybe consider defer it to a more *relevant time*.

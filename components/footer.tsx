import { Container } from './container'
import SvgIcon from './SvgIcon'

export const Footer = () => {
  return (
    <footer className="bg-accent-2">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <a href="http://www.freepik.com" className="hover:underline text-accent-7 text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Blog logo designed by Freepik.
          </a>
          <div className="text-accent-7 text-3xl lg:text-4xl flex flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            Get in touch:
            &nbsp;
            <a href="https://github.com/mstrk" target="_blank" rel='noopener noreferrer' >
              <SvgIcon name='github' size={30} />
            </a>
            &nbsp;
            &nbsp;
            <a href="https://twitter.com/mstrk512" target="_blank" rel='noopener noreferrer' >
              <SvgIcon name='twitter' size={30} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

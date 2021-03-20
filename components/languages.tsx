const everyDayLangs = ['Javascript', 'Typescript', 'Node.js', 'express', 'react', 'react-native', 'redux', 'jest', 'cypress', 'Docker', 'PostgreSQL', 'MongoDB']
const projectLangs = ['Dart', 'Kotlin', 'Go', 'Rust', 'Flutter', 'Next.js', 'hapi', 'storeon']
const platformsAndMore = ['AWS', 'GCP', 'Firebase', 'MongoDB Atlas', 'serverless']

export const Languages = () => {
  return (
    <section>
      <p className="text-5xl lg:text-7xl mb-4 lg:mb-8">&lt;Software Engineering /&gt;</p>
      <p className="text-xl lg:text-3xl mb-4 lg:mb-4">Every day languages & miscellaneous:</p>
      <p className="lg:text-2xl mb-4 lg:mb-8 md:ml-4">- {everyDayLangs.join(', ')};</p>
      <p className="text-xl lg:text-3xl mb-4 lg:mb-8">Personal projects languages & miscellaneous:</p>
      <p className="lg:text-2xl mb-4 lg:mb-8 md:ml-4">- {projectLangs.join(', ')};</p>
      <p className="text-xl lg:text-3xl mb-4 lg:mb-8">Platforms & more:</p>
      <p className="lg:text-2xl mb-4 lg:mb-8 ml-4">- {platformsAndMore.join(', ')};</p>
      <p className="text-xl lg:text-3xl mb-4 lg:mb-8">Bucket list:</p>
      <p className="lg:text-2xl mb-32 lg:mb-28 ml-4">- Swift;</p>
    </section>
  )
}

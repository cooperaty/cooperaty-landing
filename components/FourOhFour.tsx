import GradientText from './GradientText'

const FourOhfour = () => {
  return (
    <div className="">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <a href="/">
            <img
              className="mx-auto h-20 w-auto"
              src="../img/logo_cooperaty.png"
              alt="Cooperaty"
            />
          </a>
        </div>
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide">
              <GradientText>404 error</GradientText>
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Hmm... you must be lost!
            </h1>
            <p className="mt-2 text-lg text-white-500 text-opacity-20">
              The page you are looking for could not be found.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FourOhfour

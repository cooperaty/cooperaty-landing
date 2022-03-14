import { useRef, useEffect } from 'react'
import Button from './Button'
import { gsap, Power3 } from 'gsap'

const HeroSectionHome = () => {
  const sideImage = useRef(null)
  //let heroText = useRef(null)

  const tl = gsap.timeline()
  //let App = useRef(null)

  useEffect(() => {
    //gsap.to(App.current, 0, {css: {visibility:'visible'}})

    /*
      const tagOne = heroText.children[0];
      const tagTwo = heroText.children[1];
      const tagThree = heroText.children[2];
      const tagFour = heroText.children[3];
      
      //content animation
      tl.from(tagOne, .7, {opacity: 0, y: 50, ease: Power3.easeOut}, 'Start')
        .from(tagTwo, .7, {opacity: 0, y: 50, ease: Power3.easeOut, delay: .2}, 'Start')
        .from(tagThree, .7, {opacity: 0, y: 50, ease: Power3.easeOut, delay: .4}, 'Start')
        .from(tagFour, .7, {opacity: 0, y: 50, ease: Power3.easeOut, delay: .6}, 'Start')
        */
    //image animation
    tl.to(sideImage.current, 0.7, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    })
  }, [])

  return (
    <div className="App">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-16">
            <div className="mx-auto max-w-7xl">
              <div className="">
                <div className="px-2 text-center md:max-w-2xl md:mx-auto lg:my-24 z-10">
                  <div /*ref={el => {heroText = el}}*/>
                    <h1 className="mb-3 lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-white font-bold font-heading">
                      Cooperaty
                    </h1>

                    <p className="mb-8 text-white text-opacity-50 lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg">
                      A decentralized trading academy in symbiosis with a hedge fund managed by the League of Traders.
                    </p>

                    <div className="flex flex-row justify-center">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://app.cooperaty.org"
                      >
                        <Button>App</Button>
                      </a>
                    </div>
                    <div className="z-10 relative mx-auto lg:max-w-none h-full">
                      <div className="mt-5 w-full mx-auto w-3/4 md:w-1/2 pt-4 text-align">
                        <p className="mt-16 py-4 text-sm text-white text-opacity-50 uppercase tracking-wide font-semibold">
                          Powered by
                        </p>
                        <div className="flex ml-10">
                          <div className="flex justify-center">
                            <a
                              className="hover:opacity-70 transition duration-200 ease-in-out"
                              href="https://solana.com/"
                            >
                              <img
                                className="h-8 sm:h-8"
                                src="../logo_solana.svg"
                                alt="Solana"
                              />
                            </a>
                          </div>
                          <div className="flex justify-center -my-1 mx-10">
                            <a
                              className="hover:opacity-70 transition duration-200 ease-in-out"
                              href="https://mango.markets"
                            >
                              <img
                                className="h-9 sm:h-10"
                                src="img/logo_mango.svg"
                                alt="Mango"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHome

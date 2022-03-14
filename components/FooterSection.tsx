const FooterSection = () => {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto ">
          <footer className="py-20 px-4">
            <div className="px-4 py-8 mx-auto">
              <div className="flex justify-center items-center text-center content-center w-full mx-4 mb-8 lg:mb-16">
                <div className="w-full px-4 mb-12 lg:mb-0">
                  <a className="text-white-600 text-2xl leading-none" href="#">
                    <img
                      className="h-14 m-auto"
                      src="img/logo_cooperaty.png"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <p className="mt-5 mb-6 text-white text-opacity-70 leading-loose">
                    Cooperaty is managed by Cooperaty DAO.{' '}
                  </p>
                  <div className="flex flex-row justify-center">
                    <a
                      className="flex h-6 w-6 m-2"
                      href="https://github.com/cooperaty"
                    >
                      <img className="mx-auto" src="socials/github.svg" />
                    </a>
                    <a
                      className="flex h-6 w-6 m-2"
                      href="https://discord.gg/Rwad8agpRJ"
                    >
                      <img className="mx-auto" src="socials/discord.svg" />
                    </a>
                    <a
                      className="flex h-6 w-6 m-2"
                      href="https://twitter.com/CooperatyDAO"
                    >
                      <img className="mx-auto" src="socials/twitter.svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <p className="text-center text-sm text-white text-opacity-70 pb-2">
                  Made by Cooperaty DAO 2022
                </p>
                <p className="text-center text-sm text-white text-opacity-70">
                  Based on <a href="https://github.com/blockworks-foundation/mango-web">Mango</a> by &copy; Blockworks Foundation 2021
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default FooterSection

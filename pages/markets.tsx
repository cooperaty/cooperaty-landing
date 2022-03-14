import NavBarBeta from '../components/NavBarBeta'
import HeroSectionMarkets from '../components/HeroSectionMarkets'
import FeatureSection from '../components/FeatureSection'
import FooterSection from '../components/FooterSection'

const Markets = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all overflow-hidden`}>
      <NavBarBeta />
      <HeroSectionMarkets />
      <FeatureSection />
      <FooterSection />
    </div>
  )
}

export default Markets

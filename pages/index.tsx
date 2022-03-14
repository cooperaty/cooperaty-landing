import NavBarBeta from '../components/NavBarBeta'
import HeroSectionHome from '../components/HeroSectionHome'
import FooterSection from '../components/FooterSection'

const Index = () => {
  return (
    <div className={`text-th-fgd-1 transition-all overflow-hidden text-slate-400 bg-slate-900`}>
      <NavBarBeta />
      <HeroSectionHome />
      <FooterSection />
    </div>
  )
}

export default Index

import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'
import ServiceCard from '../../../components/app/ServiceCard'
import { SERVICES } from '../../../components/app/services'

export const metadata = { title: 'Services | Express Laundry', robots: { index: false } }

export default function AppServices() {
  return (
    <>
      <AppHeader />
      <AppPageTitle title="Our Premium Services" sub="Premium laundry and cleaning for homes and professionals in Thika and Nairobi." />
      <div className="space-y-5 px-4 py-5">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.slug} s={s} index={i} />
        ))}
      </div>
    </>
  )
}

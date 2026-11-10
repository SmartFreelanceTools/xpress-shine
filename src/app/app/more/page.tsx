import AppHeader from '../../../components/app/AppHeader'
import AppPageTitle from '../../../components/app/AppPageTitle'
import MoreClient from '../../../components/app/MoreClient'

export const metadata = { title: 'More | Express Laundry', robots: { index: false } }

export default function AppMore() {
  return (
    <>
      <AppHeader />
      <AppPageTitle title="More" sub="Contact, hours and our full website" />
      <MoreClient />
    </>
  )
}

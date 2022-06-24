import TBreadcrumbs from '../common/TBreadcrumbs'

function Header() {
  return (
    <div>
      <TBreadcrumbs
        data={[
          { label: 'WorkPlus', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
        ]}
      />
    </div>
  )
}

export default Header

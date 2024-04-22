import './LayoutDefault.scss'
import HeaderManagement from '../../Components/HeaderManagement';
import SideBarM from '../../Components/SideBarM';
import Content from '../../Components/Content';

function LayoutDefault(){


  return (
    <>
      <div className="layout-default"> 
        <header className="layout-default__header">
          <HeaderManagement></HeaderManagement>
        </header>
        <main className="layout-default__main">
          <div className='layout-default__sidebar'>
          <SideBarM></SideBarM>
          </div>
          <div className='layout-default__content'>
          <Content></Content>
          </div>  
        </main>
        <footer className="layout-default__footer">
        </footer>
      </div>
    </>
  )
}

export default LayoutDefault;
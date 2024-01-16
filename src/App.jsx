import {  Route ,Routes } from 'react-router-dom'
import { useState } from 'react'

//Imports all Components
import { LoadingScreen, Navbar, Home, AllCharacters, SelectSchool, SchoolView, CharaView, CategoryView, About, Page404 } from "./components/components"

export default function App() {
 

  //Loading Screen
  const [loadingScreen,setLoadingScreen] = useState(true)
  const loadingScreenF = ()=> setLoadingScreen(false)


//inicilizate theme in 'light'.
  if (!localStorage.getItem('theme')) localStorage.setItem('theme','dark')

  //Theme
  const [theme,setTheme] = useState(localStorage.getItem('theme')) 

  const switchTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
      localStorage.setItem('theme','dark')
    }
    else if(theme === 'dark'){
      setTheme('light')
      localStorage.setItem('theme','light')
    }
  }

  
return (
  <div className={theme === 'dark'? 'mainDark' : 'mainLight'} id='mainContainer' onLoad={loadingScreenF}>
    <Navbar themes={theme} themeInput={switchTheme} />
      {loadingScreen ? (
        <LoadingScreen />
        ) : (
          <Routes>
          <Route 
          path='/'
          element={<Home theme={theme} />}
          />
          <Route 
          path='/characters'
          element={<AllCharacters theme={theme} />} 
          />
          <Route 
          path='/characters/:charaName'
          element={<CharaView theme={theme} />}
          />
          <Route 
          path='/selectSchool'
          element={<SelectSchool theme={theme} />} 
          />
          <Route 
          path='/selectSchool/:schoolName'
          element={<SchoolView theme={theme} />}
          />
          <Route 
          path='/selectSchool/:schoolName/:charaName'
          element={<CharaView theme={theme} />}
          />
          <Route 
          path='about'
          element={<About theme={theme} />} 
          /> 
          <Route
          path='*'
          element={<Page404 theme={theme} />}
          />
          //CATEGORIES SEARCH
          <Route //NAME
          path='/characters/category/name/:categoryData'
          element={<CategoryView categoryName='name' theme={theme} />}
          />
          <Route //AGE
          path='/characters/category/age/:categoryData'
          element={<CategoryView categoryName='age' theme={theme} />}
          />
          <Route //DESIGNER
          path='/characters/category/designer/:categoryData'
          element={<CategoryView categoryName='designer' theme={theme} />}
          />
          <Route //ILLUSTRATOR
          path='/characters/category/illustrator/:categoryData'
          element={<CategoryView categoryName='illustrator' theme={theme} />}
          />
           <Route //VOICE
          path='/characters/category/voice/:categoryData'
          element={<CategoryView categoryName='voice' theme={theme} />}
          />
          <Route //ROLE
          path='/characters/category/role/:categoryData'
          element={<CategoryView categoryName='role' theme={theme} />}
          />
          <Route //COMBAT CLASS
          path='/characters/category/combatClass/:categoryData'
          element={<CategoryView categoryName='combatClass' theme={theme} />}
          />
          <Route //WEAPON TYPE
          path='/characters/category/weaponType/:categoryData'
          element={<CategoryView categoryName='weaponType' theme={theme} />}
          />
          <Route //SKIN SET
          path='/characters/category/skinSet/:categoryData'
          element={<CategoryView categoryName='skinSet' theme={theme} />}
          />
          <Route //Category view
          path='/characters/category/:categoryName/:categoryData/:charaName'
          element={<CharaView theme={theme} />}
          />
    </Routes>
    )}    
    </div>
    )
}
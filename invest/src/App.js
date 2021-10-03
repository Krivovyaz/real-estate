
import './App.css';
import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TimeSharePage from './components.js/TimeSharePage';
import FinishedRealEstatePage from './components.js/FinishedRealEstatePage';
import RealEstateUnderConstructionPage from './components.js/RealEstateUnderConstructionPage';
import ContactsPage from './components.js/ContactsPage';
import FAQPage from './components.js/FAQPage';
import SignUp from './components.js/SignUp'
import HomePage from './components.js/HomePage';
import Header from './components.js/additionalComponents/Header';
import Footer from './components.js/additionalComponents/Footer';
import Error404Page from './components.js/Error404Page';
import ProjectCardPage from './components.js/ProjectCardPage';
import UserPage from './components.js/UserPage';
import LoginPage from './components.js/LoginPage';
import {Context} from './index'
import { observer } from 'mobx-react-lite';
import {check} from "./http/UserAPI"
import { fetchAllProjects} from './http/ProjectAPI';

 
const  App = observer(() => {
  // localStorage.removeItem('user')
  const {user} = useContext(Context);
  const {project} = useContext(Context);
  const[loading1, setLoading1] = useState(true);
  const[loading2, setLoading2] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  console.log('user user');
  console.log(user.user.email)

  useEffect( () => {
    const email = user.user.email;
    console.log('user');
    console.log(email)
      check(email).then(data => {
        if(data) {
          user.setUser(data);
          user.setIsAuth(true);
        }
      }).finally(() => setLoading1(false));
      fetchAllProjects().then(data =>  project.setProjects(data.projects)).finally(() => setLoading2(false));
  }, [])


  if (loading1 || loading2) {
    return <Loading>
              <i class="far fa-spinner fa-spin fa-5x fa-fw"></i>
           </Loading>
  }

  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          {
            user.isAuth && <Route path="/personalAccount">
                        <UserPage setShowFooter={setShowFooter}/>
                      </Route>
          }
          <Route path="/TimeShare">
            <TimeSharePage setShowFooter={setShowFooter} project={project}/>
          </Route>

          <Route path="/FinishedRealEstate">
            <FinishedRealEstatePage setShowFooter={setShowFooter} project={project}/>
          </Route>

          <Route path="/RealEstate">
            <RealEstateUnderConstructionPage setShowFooter={setShowFooter} project={project}/>
          </Route>

          <Route path="/Contacts">
            <ContactsPage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/FAQ">
            <FAQPage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/SignUp">
            <SignUp setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/LogIn">
            <LoginPage setShowFooter={setShowFooter}/>
          </Route>
          
          <Route path="/404">
            <Error404Page setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/ProjectPage/:projectId">
            <ProjectCardPage />
          </Route>

          <Route path="/">
            <HomePage setShowFooter={setShowFooter} project={project} />
          </Route>

        </Switch>
      </Container>
      {showFooter && <Footer showFooter={showFooter}/>}
    </Router>
  );
})

export default App;

const Container = styled.div``

const Loading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

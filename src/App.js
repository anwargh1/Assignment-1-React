import ButtonComponent from "./componant/ButtonComponent/ButtonComponent";
import PageHeader from "./componant/PageHeader/PageHeader";
import PostComponant from "./componant/PostComponent/PostComponant";
import './App.css'


function App() {
  return(
    <>
    <PageHeader/>
    <div className="display-flex">
      <PostComponant/>
      <div  className="display-flex-button">
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
          <ButtonComponent/>
      </div>
    </div>
    </>
  )
}

export default App;

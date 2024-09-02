
import React from "react"
import HomeFeature from "../../components/homeFeature/HomeFeature"
import iconChat from "../../assets/icon-chat.png"
import iconMoney from "../../assets/icon-money.png"
import iconSecurity from "../../assets/icon-security.png"
import "../../assets/style.css"

const Home =()=>{
    return(

<body>
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src="../../assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <HomeFeature img={iconChat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
       
        <HomeFeature img={iconMoney} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!"></HomeFeature>
        
        <HomeFeature img={iconSecurity} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe."/>
   
      </section>
    </main>
  
  </body>

    )
}
export default Home
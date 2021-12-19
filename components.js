class MyNavBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="AboutTheDeveloper.html">About</a>
          </li>
          <li class="nav-item">
        <a class="nav-link" href="education.html">Education</a>        
        
      </li>
          <li class="nav-item">
            <a class="nav-link" href="Experience.html">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Portfolio.html">Portfolio</a>
          </li>
          <!--<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Portfolio
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="phpSamples.html">PHP</a>   
        <a class="dropdown-item" href="javaSamples.html">Java</a>
        <a class="dropdown-item" href="cSharpSamples.html">.NET</a>
        <a class="dropdown-item" href="angularSamples.html">Angular</a>  
        </div>
      </li>-->
      <!--<li class="nav-item">
            <a class="nav-link" href="References.html">References</a>
          </li>-->
      
        </ul>
      </div>
    </nav>
      `;
    }
  }
  class MyFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="footer text-center">
      <div class="container">
        <span class="text-muted">Paul Norby - Fitchburg, WI &nbsp; &nbsp; &nbsp; &#9743; 608-347-8911</span><span style="float:right">Got any good advice?  Share it <a href="Suggestions.html">here</a>!</span>
      </div>
    </footer>
      `;
    }
  }
  customElements.define('mynavbar-component', MyNavBar);
  customElements.define('myfooter-component', MyFooter);
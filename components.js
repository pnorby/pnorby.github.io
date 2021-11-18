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
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Education
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="education.html">Madison College</a>
          <a class="dropdown-item" href="certificates.html">Certifications</a>         
        </div>
      </li>
          <li class="nav-item">
            <a class="nav-link" href="Experience.html">Experience</a>
          </li>
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Portfolio
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="phpSamples.html">PHP</a>   
        <a class="dropdown-item" href="javaSamples.html">Java</a>
        <a class="dropdown-item" href="cSharpSamples.html">.NET</a>
        <a class="dropdown-item" href="angularSamples.html">Angular</a>  
        </div>
      </li>
      <li class="nav-item">
            <a class="nav-link" href="Suggestions.html">Feedback</a>
          </li>
        </ul>
      </div>
    </nav>
      `;
    }
  }
  
  customElements.define('mynavbar-component', MyNavBar);
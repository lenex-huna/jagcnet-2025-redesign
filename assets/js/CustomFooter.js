
class CustomFooter extends HTMLElement {
  constructor() {
    super();
  }

    connectedCallback() {
        this.innerHTML = `
           <footer id="footer" class="footer">

                <div class="footer-top">
                <div class="container">
                    <div class="row gy-4 mobile-footer">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <a href="./index.html" class="logo d-flex align-items-center">
                        <span class="sitename">USALSA</span>
                        </a>
                        <div class="footer-contact pt-3">
                        <p>9275 Gunston Rd, </p>
                        <p>Fort Belvoir, VA 22060</p>

                        </div>
                        <div class="social-links d-flex mt-4">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <!-- <h4>Useful Links</h4> -->
                        <ul>
                        <li><i class="bi bi-chevron-right"></i> <a href="./public/helpdesk.html"> ITD Support</a>
                        </li>
                        <li><i class="bi bi-chevron-right"></i> <a
                            href="https://www.army.mil/armyequityandinclusion#org-accessibility">
                            Accessibility</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx"
                            target="_blank"> Section 508</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="./public/copyright.html"> Copyright</a>
                        </li>
                        <li><i class="bi bi-chevron-right"></i> <a href="https://dodcio.defense.gov/DoD-Web-Policy/"
                            target="_blank"> DoD lbC Policy</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="https://www.usa.gov/" target="_blank"> USA.gov</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links mobile-footer-link">

                        <ul>
                        <li><i class="bi bi-chevron-right"></i> <a href="./public/foia.html"> FOIA</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="https://www.army.mil/article/236698" target="_blank"> No
                            Fear Act</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="https://osc.gov/Pages/About.aspx" target="_blank">
                            OSC</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="./public/privacypolicy.html"> Privacy
                            Policy</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a
                            href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/footerContent.xsp" target="_blank"> Release
                            Notes</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="./public/terms.html"> Terms</a></li>

                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-3 footer-links mobile-footer-link mobile-hide">
                        <img src="./assets/img/GoArmyJAG-jag-logo-01.png" alt="" class="footer-img">

                    </div>
                    </div>
                </div>
                </div>
            </footer>
        
        `;
      
  }
}

customElements.define('custom-footer', CustomFooter);
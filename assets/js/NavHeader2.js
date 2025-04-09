class NavHeader2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  
    this.innerHTML = `
          <!-- Index Nav wrapper 1.21.2025 -->
      <div class="nav-container">
        <div class="special-header">
          <h2>1L Internship Opportunities and Active Duty Applications Open 01 January</h2>
        </div>
        <nav>
          <ul class="mobile-nav">
            <li>
              <div class="menu-icon-container" tabindex="0">
                <div class="menu-icon">
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                </div>
              </div>
            </li>
            <li class="new-mobile-logo" id="new-mobile-logo">
              <a href="../index.html" class="link-logo">
                <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              </a>
              <p class="">JAG Corps</p>
            </li>
            <!-- <li>
              <a href="#" class="link-bag"></a>
            </li> -->
          </ul>

          <!-- Reformat this nav to use grid properties -->
          <ul class="desktop-nav">
            <li class="full-width">
              <a href="../index.html" class="link-logo" id="link-logo">
                <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              </a>
              <span class="logo-span">JAG Corps</span>
            </li>
            <li>
              <a href="#" class="tab-search has-submenu" id="tab-search"><span class="li-labels">Leadership</span></a>
            </li>
            <li>
              <a href="https://www.jagcnet.army.mil/GoArmyJAG/PracticeAreas" target="_blank"><span
                  class="li-labels">Practice Areas</span></a>
            </li>
            <li>
              <a href="#" class="second-search has-submenu"><span class="li-labels">Careers</span></a>
            </li>
            <li>
              <a href="https://tjaglcs.army.mil/" target="_blank"><span class="li-labels">Legal Center</span></a>
            </li>
            <li>
              <a href="#" class="third-search has-submenu"><span class="li-labels">Legal Services</span></a>
            </li>
            <li>
              <a href="#" class="fourth-search has-submenu"><span class="li-labels">Courts</span></a>
            </li>
            <!-- <li>
              <a href="#" class="five-search">Public Docs</a>
            </li> -->
            <!-- <li>
              <a href="#" class="six-search">FOIA</a>
            </li> -->
            <!-- <li>
              <a href="#" class="seven-search">Access</a>
            </li> -->
            <li>
              <a href="#" class="eight-search has-submenu"><span class="li-labels">Resources</span></a>
            </li>
            <li>
              <a href="#" class="nine-search has-submenu"><span class="li-labels">Helpful Links</span></a>
            </li>
            <!-- <li>
              <a href="#" class="link-search">Helpful Links</a>
            </li> -->
            <li>
              <a href="https://www.jagcnet2.army.mil/Sites/JAGC.nsf/" target="_blank" class="ten-search"><span
                  class="li-labels">JAGCNet Login</span></a>
            </li>
            <!-- <li>
                        <a href="#" class="link-bag"></a>
                    </li> -->
          </ul>
        </nav> <!-- End of navigation items -->

        <!-- Search bar code -->
        <div class="search-container hide">
          <div class="link-search"></div>

          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="link-close"></div>
            <!-- I added a logo here -->
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Quick Links</h2>
            <ul class="flex-links">

              <li>
                <a href="https://www.jagcnet.army.mil/ppto" target="_blank">Personnel</a>
              </li>
              <li>
                <a href="../public/legalcareer.html">CP-56</a>
              </li>
              <li>
                <a href="https://www.army.mil/ostc" target="_blank">OSTC</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/help.xsp" target="_blank">Help</a>
              </li>
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FJAGCProfiles%2Fmy-account&x=true"
                  target="_blank">Request an Account</a>
              </li>
            </ul>


          </div>
        </div>

        <!-- Search bar code first link -->
        <div class="search-container first-link hide" id="first-link">
          <div class="link-search"></div>
          <div class="tab-search"></div>
          <div class="search-bar active">
            <!-- <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form> -->
          </div>
          <!-- <div class="firstLink-close"></div> -->
          <div class="quick-links">
            <div class="firstLink-close desktop-submenu-close" tabindex="0"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Leadership</h2>
            <ul class="flex-links">
              <li>
                <a href="../public/leader2.html">Leadership</a>
              </li>

              <li>
                <a href="../public/strategy.html">JAG Corps Strategy</a>
              </li>

              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/91EFF120637EC24D85257DB7005D879C/$File/JAGC%20Poster%202014.pdf"
                  target="_blank">JAGC Poster</a>
              </li>




              <li>
                <a href="../public/memoriam.html">In Memoriam</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/46DCA0CA1EE75266852586C5004A681F/$File/US%20Army%20JAG%20Corps%20Four%20Constants%20Smart%20Card.pdf"
                  target="_blank">US Army JAG Corps Four “Constants” Smart Card</a>
              </li>
              <li>
                <a href="../public/reserve-page.html">Reserve Army Office Legal Websites</a>
              </li>

            </ul>


          </div>
        </div>

        <!-- Search bar code second link -->
        <div class="search-container second-link hide" id="second-link">
          <div class="link-search"></div>
          <div class="second-search"></div>
          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="secondLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Career Links</h2>
            <ul class="flex-links">
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Civilian" target="_blank">Lawyers</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Interns" target="_blank">Internship/Externship Program</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Civilian" target="_blank">Paralegals</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Civilian" target="_blank">Civilians</a>
              </li>
              <li>
                <a href="https://myaccess.dmdc.osd.mil/identitymanagement/app/login" target="_blank">Military Spouse
                  Attorney Hiring Program</a>
              </li>

            </ul>


          </div>
        </div>
        <!-- Search bar code third link -->
        <div class="search-container third-link hide" id="third-link">
          <div class="link-search"></div>
          <div class="third-search"></div>
          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="thirdLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Legal Services Links</h2>
            <ul class="flex-links">
              <li>
                <a href="../public/claims.html">Claims Website</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Apps/PCLAIMS/PCLAIMSPublic.nsf" target="_blank">File a Personnel
                  Claim</a>
              </li>
              <li>
                <a href="../public/claims.html">How to File a Tort Claim</a>
              </li>
              <li>
                <a href="../legal-services/legal-page.html">Legal Services Website</a>
              </li>
              <li>
                <a href="https://legalassistance.law.af.mil/" target="_blank">Legal Assistance Offices</a>
              </li>
              <li>
                <a href="../public/office.html">Office of the Soldier's Counsel</a>
              </li>

              <li>
                <a href="../legal-services/victims.html">Special Victims' Counsel Program</a>
              </li>
              <li>
                <a href="../public/trialdefense.html">Trial Defense Service</a>
              </li>
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FTSG%2Fp%2F46bc4f0c-f5a6-494e-b654-c4a49d23902b&x=true"
                  target="_blank">Online Ethics Training</a>
              </li>
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=9675&r=f&u=https%3A%2F%2Fwww.jagcnet2.army.mil%2FInitialEthicsTraining&x=true"
                  target="_blank">Initial Ethics Training for New Personnel</a>
              </li>
              <li>
                <a href="../legal-services/procurement.html">Procurement Fraud
                  Division</a>
              </li>
            </ul>


          </div>
        </div>
        <!-- Search bar code fourth link -->
        <div class="search-container fourth-link hide" id="fourth-link">
          <div class="link-search"></div>
          <div class="fourth-search"></div>
          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="fourthLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Court Links</h2>
            <ul class="flex-links">
              <li>
                <a href="../public/jud.html">U.S. Army Trial Judiciary</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Apps/eDocket/eDocketPublic.nsf" target="_blank">eDocket</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/PMRG" target="_blank">Court-Martial Panel Member
                  Randomization Generator</a>
              </li>
              <li>
                <a href="../public/appeals.html">U.S. Army Court of Criminal Appeals</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/ACCALibrary/cases/opinions/OC" target="_blank">ACCA APPELLATE
                  LIBRARY</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/RulesofCourt" target="_blank">Rules of the Court</a>
              </li>
              <li>
                <a href="https://www.armfor.uscourts.gov/newcaaf/home.htm" target="_blank">U.S. Court of Appeals for the
                  Armed Forces</a>
              </li>
              <li>
                <a href="https://www.supremecourt.gov/" target="_blank">U.S. Supreme Court</a>
              </li>
            </ul>


          </div>
        </div>
        <!-- Search bar code five link -->
        <div class="search-container five-link hide" id="five-link">
          <div class="link-search"></div>
          <div class="five-search"></div>
          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="fiveLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Public Libraries</h2>
            <ul class="flex-links">
              <li>
                <a href="#">Administrative and Civil Law</a>
              </li>
              <li>
                <a href="#">Claims</a>
              </li>
              <li>
                <a href="#">Contract and Fiscal law</a>
              </li>
              <li>
                <a href="#">National Security Law</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/legalassistancepublic.nsf/home.xsp?refreshed=true"
                  target="_blank">Legal Assistance</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/EE26CE7A9678A67A85257E1300563559/$File/CommandersLegalHandbook.pdf"
                  target="_blank">Commander's Legal Handbook</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/lawofficemanagement" target="_blank">Law Office Management</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/F3FBB5D831EAED2F8525855F006400F2/%24File/2019%20Advocacy%20Trainer.pdf"
                  target="_blank">Advocacy Trainer (PDF Manual only)</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/homeContent.xsp?documentId=7C4D0630163282308525855F00647525"
                  target="_blank">Advocacy Trainer (PDF Manual and Videos)</a>
              </li>
              <li>
                <a href="#">Pub 1-1</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/homeContent.xsp?documentId=6448C92179F9C21C8525897C003AFC80"
                  target="_blank">RC PPTO Update</a>
              </li>

            </ul>

          </div>
        </div>


        <!-- Search bar code six link -->
        <div class="search-container six-link hide" id="six-link">
          <div class="link-search"></div>
          <div class="six-search"></div>
          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="sixLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>FOIA Links</h2>
            <ul class="flex-links">
              <li>
                <a href="https://www.jagcnet.army.mil/ACCALibrary/cases/opinions/OC" target="_blank">ACCA Opinions</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/ACMPRS" target="_blank">Army Court-Martial Public Record System</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/homeContent.xsp?open&documentId=81636D4A779CAD71852588D3004C6990&refreshed=true"
                  target="_blank">Army Settlements</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Bankruptcy" target="_blank">Bankruptcy Listings</a>
              </li>
              <li>
                <a href="../public/foia.html">FOIA Contact Information</a>
              </li>

            </ul>

          </div>
        </div>

        <!-- Search bar code seven link -->
        <div class="search-container seven-link hide" id="seven-link">
          <div class="link-search"></div>
          <div class="seven-search"></div>
          <div class="search-bar active">
            <!-- <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form> -->
          </div>

          <div class="quick-links">
            <div class="sevenLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Access Links</h2>
            <ul class="flex-links">
              <li>
                <a href="../public/foia.html" target="blank">FOIA</a>
              </li>

            </ul>

          </div>
        </div>

        <!-- Search bar code eight link -->
        <div class="search-container eight-link hide" id="eight-link">
          <div class="link-search"></div>
          <div class="eight-search"></div>
          <!-- <div class="search-bar active">
            <form action="">
              <input type="text" placeholder="Search Jagcnet">
            </form>
          </div> -->

          <div class="quick-links">
            <div class="eightLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
              <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
              <span class="jag-logo">JAG Corps</span>
            </div> -->
            <h2>Wellness Resource Links</h2>
            <ul class="flex-links">
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/home.xsp?refreshed=true#" target="_blank">OCONUS
                  Military Family Life Counseling (MFLC) POCs</a>
              </li>
              <li>
                <a href="https://www.veteranscrisisline.net/get-help-now/military-crisis-line/" target="_blank">Military
                  Crisis Line</a>
              </li>
              <li>
                <a href="https://www.armyresilience.army.mil/suicide-prevention/index.html" target="_blank">Army Suicide
                  Prevention Program</a>
              </li>
              <li>
                <a href="https://988lifeline.org/" target="_blank">Suicide & Crisis Hotline</a>
              </li>
              <li>
                <a href="https://www.hprc-online.org/" target="_blank">Human Performance Resources (by CHAMP)</a>
              </li>
              <li>
                <a href="https://www.militaryonesource.mil/health-wellness/" target="_blank">Health & Wellness (Military
                  OneSource)</a>
              </li>
              <li>
                <a href="https://www.militaryonesource.mil/resources/millife-guides/mental-health-support/"
                  target="_blank">Mental Health Resources</a>
              </li>
              <li>
                <a href="https://www.americanbar.org/groups/lawyer_assistance/resources/covid-19--mental-health-resources/"
                  target="_blank">ABA Mental Health Resources</a>
              </li>
              <li>
                <a href="https://www.armyresilience.army.mil/index.html" target="_blank">Army Resilience Directorate</a>
              </li>
              <li>
                <a href="https://www.armyresilience.army.mil/ard/R2/R2-Performance-center.html" target="_blank">Army Ready
                  and Resilient (R2) Performance Centers</a>
              </li>
              <li>
                <a href="https://www.militaryonesource.mil/resources/mobile-apps/de-stress-and-relax-with-chill-drills-by-military-onesource/"
                  target="_blank">Stress and Relaxation Drills</a>
              </li>
              <li>
                <a href="https://www.militaryonesource.mil/health-wellness/prevention-care/practicing-good-nutrition-boosts-personal-performance/"
                  target="_blank">Nutrition Tips</a>
              </li>
            </ul>

          </div>
        </div>

        <!-- Search bar code nine link -->
        <div class="search-container nine-link hide" id="nine-link">
          <div class="link-search"></div>
          <div class="nine-search"></div>
          <!-- <div class="search-bar active">
                <form action="">
                  <input type="text" placeholder="Search Jagcnet">
                </form>
              </div> -->

          <div class="quick-links">
            <div class="nineLink-close desktop-submenu-close"></div>
            <!-- <div class="desktop-logo">
                  <img src="../assets/images/usarmy.svg" alt="" class="img-logo">
                  <span class="jag-logo">JAG Corps</span>
                </div> -->
            <h2>Helpful Links</h2>
            <ul class="flex-links">
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FJAGCProfiles%2Fmy-account&x=true"
                  target="_blank">Request an Account</a>
              </li>

              <li>
                <a href="https://www.jagcnet.army.mil/Sites/ppto.nsf/home.xsp?refreshed=true" target="_blank">Personnel</a>
              </li>
              <li>
                <a href="../public/legalcareer.html">CP-56</a>
              </li>
              <li>
                <a href="https://www.army.mil/ostc" target="_blank">OSTC</a>
              </li>
              <li>
                <a href="https://login.milsuite.mil/?goto=https%3A%2F%2Fwww.milsuite.mil%3A443%2F"
                  target="_blank">MilSuite</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/help.xsp?refreshed=true" target="_blank">Help</a>
              </li>


            </ul>

          </div>
        </div>



        <!-- Mobile Verison -->
        <div class="mobile-search-container">
          <div class="link-search"></div>
          <div class="search-bar">
            <!-- <form action="">
                      <input type="text" placeholder="Search JAGCNet">
                    </form> -->

          </div>
          <span class="cancel-btn"><i class="bi bi-arrow-left" tabindex="0"></i></span>
          <div class="quick-links">
            <!-- <h2>Quick Links</h2> -->
            <ul>
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FJAGCProfiles%2Fmy-account&x=true"
                  target="_blank">Request an Account</a>
              </li>

              <li>
                <a href="https://www.jagcnet.army.mil/Sites/ppto.nsf/home.xsp?refreshed=true" target="_blank">Personnel</a>
              </li>
              <li>
                <a href="../public/legalcareer.html">CP-56</a>
              </li>
              <li>
                <a href="https://www.army.mil/ostc" target="_blank">OSTC</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/help.xsp?refreshed=true" target="_blank">Help</a>
              </li>


            </ul>


          </div>
        </div>

        <!-- leadership Mobile Verison -->
        <div class="firstmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Leadership</h2>
            <ul>
              <li>
                <a href="../public/leader2.html">Leadership</a>
              </li>

              <li>
                <a href="../public/strategy.html">JAG Corps Strategy</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/91EFF120637EC24D85257DB7005D879C/$File/JAGC%20Poster%202014.pdf"
                  target="_blank">JAGC Poster</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/46DCA0CA1EE75266852586C5004A681F/$File/US%20Army%20JAG%20Corps%20Four%20Constants%20Smart%20Card.pdf"
                  target="_blank">US Army JAG Corps Four “Constants” Smart Card</a>
              </li>
              <li>
                <a href="../public/reserve-page.html">Reserve Army Office Legal Websites</a>
              </li>


              <li>
                <a href="../public/memoriam.html">In Memoriam</a>
              </li>
            </ul>


          </div>
        </div>

        <!-- Careers Mobile Verison -->
        <div class="secondmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links career">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Career Links</h2>
            <ul>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Civilian" target="_blank">Lawyers</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Interns" target="_blank">Internship/Externship Program</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Civilian" target="_blank">Paralegals</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/GoArmyJAG/Civilian" target="_blank">Civilians</a>
              </li>
              <li>
                <a href="https://myaccess.dmdc.osd.mil/identitymanagement/app/login" target="_blank">Military Spouse
                  Attorney Hiring Program</a>
              </li>
            </ul>


          </div>
        </div>

        <!-- Legal Services Mobile Verison -->
        <div class="thirdmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Legal Services</h2>
            <ul>
              <li>
                <a href="../public/claims.html">Claims Website</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Apps/PCLAIMS/PCLAIMSPublic.nsf/xpOnline.xsp?refreshed=true"
                  target="_blank">File a Personnel Claim</a>
              </li>
              <li>
                <a href="../public/claims.html">How to File a Tort Claim</a>
              </li>
              <li>
                <a href="../legal-services/legal-page.html">Legal Services Website</a>
              </li>
              <li>
                <a href="https://legalassistance.law.af.mil/" target="_blank">Legal Assistance Offices</a>
              </li>
              <li>
                <a href="../public/office.html">Office of the Soldier's Counsel</a>
              </li>

              <li>
                <a href="../legal-services/victims.html">Special Victims' Counsel Program</a>
              </li>
              <li>
                <a href="../public/trialdefense.html">Trial Defense Service</a>
              </li>
              <!-- <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FTSG%2Fp%2F46bc4f0c-f5a6-494e-b654-c4a49d23902b&x=true" target="_blank">Online Ethics Training</a>
              </li> -->
              <!-- <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=9675&r=f&u=https%3A%2F%2Fwww.jagcnet2.army.mil%2FInitialEthicsTraining&x=true" target="_blank">Initial Ethics Training for New Personnel</a>
              </li> -->
              <!-- <li>
                <a href="#">Procurement Fraud Division</a>
              </li> -->
            </ul>
          </div>
        </div>
        <!-- Courts Mobile Verison -->
        <div class="fourthmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Court Links</h2>
            <ul>
              <li>
                <a href="../public/jud.html">U.S. Army Trial Judiciary (Website)</a>
              </li>

              <li>
                <a href="https://www.jagcnet.army.mil/PMRG" target="_blank">Court-Martial Panel Randomization Generator</a>
              </li>
              <li>
                <a href="../public/appeals.html">U.S. Army Court of Criminal Appeals (Website)</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/ACCALibrary/cases/opinions/OC" target="_blank">U.S. Army Court of
                  Criminal Appeals (Opinions)</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/RulesofCourt" target="_blank">Rules of the Court</a>
              </li>
              <li>
                <a href="https://www.armfor.uscourts.gov/newcaaf/home.htm" target="_blank">U.S. Court of Appeals for the
                  Armed Forces</a>
              </li>
              <li>
                <a href="https://www.supremecourt.gov/" target="_blank">U.S. Supreme Court</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Public Docs Mobile Verison -->
        <!-- <div class="fivemobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>
          
          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Public Doc Links</h2>
            <ul>
              <li>
                <a href="#">Administrative and Civil Law</a>
              </li>
              <li>
                <a href="#">Claims</a>
              </li>
              <li>
                <a href="#">National Security Law</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/legalassistancepublic.nsf/home.xsp?refreshed=true" target="_blank">Legal Assistance</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/EE26CE7A9678A67A85257E1300563559/$File/CommandersLegalHandbook.pdf" target="_blank">Commander's Legal Handbook</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/lawofficemanagement.nsf/home.xsp?refreshed=true" target="_blank">Law Office Management</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/F3FBB5D831EAED2F8525855F006400F2/%24File/2019%20Advocacy%20Trainer.pdf" target="_blank">Advocacy Trainer (PDF Manual only)</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/homeContent.xsp?documentId=7C4D0630163282308525855F00647525&refreshed=true" target="_blank">Advocacy Trainer (PDF Manual and Videos)</a>
              </li>
              <li>
                <a href="#">Pub 1-1</a>
              </li>
            
            </ul>
          </div>
        </div> -->

        <!-- FOIA Mobile Verison -->
        <div class="sixmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>FOIA Links</h2>
            <ul>
              <li>
                <a href="https://www.jagcnet.army.mil/ACCALibrary/cases/opinions/OC" target="_blank">ACCA Opinions</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/ACMPRS" target="_blank">Army Court-Martial Public Record System</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/JAGC.nsf/homeContent.xsp?open&documentId=81636D4A779CAD71852588D3004C6990&refreshed=true"
                  target="_blank">Army Settlements</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Bankruptcy" target="_blank">Bankruptcy Listings</a>
              </li>
              <li>
                <a href="../public/foia.html">FOIA Contact Information</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Access Mobile Verison -->
        <div class="sevenmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Access Links</h2>
            <ul>
              <li>
                <a href="../public/foia.html">FOIA</a>
              </li>
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FJAGCProfiles%2Fmy-account&x=true"
                  target="_blank">Request an Account</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Wellness Mobile Verison -->
        <div class="eightmobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Wellness Links</h2>
            <ul>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/home.xsp?refreshed=true#" target="_blank">OCONUS
                  Military Family Life Counseling (MFLC) POCs</a>
              </li>
              <li>
                <a href="https://www.veteranscrisisline.net/get-help-now/military-crisis-line/" target="_blank">Military
                  Crisis Line</a>
              </li>
              <li>
                <a href="https://www.armyresilience.army.mil/suicide-prevention/index.html" target="_blank">Army Suicide
                  Prevention Program</a>
              </li>
              <li>
                <a href="https://988lifeline.org/" target="_blank">Suicide & Crisis Hotline</a>
              </li>
              <li>
                <a href="https://www.hprc-online.org/" target="_blank">Human Performance Resources (by CHAMP)</a>
              </li>
              <li>
                <a href="https://www.militaryonesource.mil/health-wellness/" target="_blank">Health & Wellness (Military
                  OneSource)</a>
              </li>
              <li>
                <a href="https://www.militaryonesource.mil/resources/millife-guides/mental-health-support/"
                  target="_blank">Mental Health Resources</a>
              </li>
              <li>
                <a href="https://www.americanbar.org/groups/lawyer_assistance/resources/covid-19--mental-health-resources/"
                  target="_blank">ABA Mental Health Resources</a>
              </li>
              <li>
                <a href="https://www.armyresilience.army.mil/index.html" target="_blank">Army Resilience Directorate</a>
              </li>
              <!-- <li>
                <a href="#">Army Ready and Resilient (R2) Performance Centers</a>
              </li> -->
              <!-- <li>
                <a href="#">Stress and Relaxation Drills</a>
              </li> -->
              <!-- <li>
                <a href="#">Nutrition Tips</a>
              </li> -->
            </ul>
          </div>
        </div>
        <!-- Helpfullinks Mobile Verison -->
        <div class="ninemobile-search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search JAGCNet">
            </form>
          </div>

          <div class="quick-links">
            <span class="cancel-btn"><i class="bi bi-arrow-left"></i></span>
            <h2>Helpful Links</h2>
            <ul>
              <li>
                <a href="https://federation.eams.army.mil/pool/sso/authenticate/l/15?f=c&m=GET&p=&r=f&u=https%3A%2F%2Fapps.jag.army.mil%2FJAGCProfiles%2Fmy-account&x=true"
                  target="_blank">Request an Account</a>
              </li>

              <li>
                <a href="https://www.jagcnet.army.mil/Sites/ppto.nsf/home.xsp?refreshed=true" target="_blank">Personnel</a>
              </li>
              <li>
                <a href="../public/legalcareer.html">CP-56</a>
              </li>
              <li>
                <a href="https://www.army.mil/ostc" target="_blank">OSTC</a>
              </li>
              <li>
                <a href="https://login.milsuite.mil/?goto=https%3A%2F%2Fwww.milsuite.mil%3A443%2F"
                  target="_blank">MilSuite</a>
              </li>
              <li>
                <a href="https://www.jagcnet.army.mil/Sites/jagc.nsf/help.xsp?refreshed=true" target="_blank">Help</a>
              </li>


            </ul>
          </div>
        </div>
        <!-- End of Mobile Verision Links -->

      </div>
      <!--End  Nav wrapper-- >
      `
    ;
  }
}

customElements.define('nav-header2', NavHeader2);
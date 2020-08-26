import React from 'react';


function Footer() {
    return <div>

        <section>
            <footer id="footer">
                <i className="icos bottom-ico fab fa-twitter" />
                <i className="icos bottom-ico fab fa-facebook-f" />
                <i className="icos bottom-ico fab fa-instagram" />
                <i className="icos bottom-ico fas fa-envelope" />
                {/* Copyright */}
                <p className="cpy">© Copyright 2020 ANII </p>
                <p className="myname">Coded &amp; Designed by <a className="site" href="https://aniquehussain.github.io/Personal-Site/">@Syed Anique</a></p>
                <p className="df">Background-Credit-<a className="cred" href="http://www.freepik.com">denamorado / Freepik</a></p>
                <p className="df">ico credit-<a className="cred" href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>
                </p>
            </footer>
            {/* By Syed Anique Hussain */}
        </section>
    </div>

}

export default Footer;
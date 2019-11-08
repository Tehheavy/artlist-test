import React from "react";
import './footer.css'
import { Icon, InlineIcon } from '@iconify/react';
import facebookFill from '@iconify/icons-ant-design/facebook-fill';
import instagramIcon from '@iconify/icons-fa-brands/instagram';

import youtubeFill from '@iconify/icons-ant-design/youtube-fill';
import vimeoV from '@iconify/icons-fa-brands/vimeo-v';
import twitterOutline from '@iconify/icons-ant-design/twitter-outline';


function Footer() {
  return (
    <div className="footer-class">
        <div>
            <p>artlist@artlist.io</p>
        </div>
        <div>
            <div className="footer-icons-class">
            <Icon icon={facebookFill} color="#ffff" />
            <Icon icon={instagramIcon} color="#ffff" />
            <Icon icon={twitterOutline} color="#ffff" />
            <Icon icon={vimeoV} color="#ffff" />
            <Icon icon={youtubeFill} color="#ffff" />
            </div>
        </div>
    </div>
  );
}

export default Footer;

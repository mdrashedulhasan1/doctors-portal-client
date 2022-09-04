import React from 'react';
import footer from '../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover' }} >
            <div class="footer mt-12">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div class="footer footer-center p-4">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
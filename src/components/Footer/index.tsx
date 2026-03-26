import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterContent,
    FooterTitle,
    FooterSubtitle,
    SocialLinks,
    SocialIcon,
    Copyright
} from './styles';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent>
                <FooterTitle>Vamos construir algo incrível?</FooterTitle>
                <FooterSubtitle>Estou sempre aberta a conversar sobre produto, agilidade e tecnologia.</FooterSubtitle>

                <SocialLinks
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <SocialIcon href="http://www.linkedin.com/in/jessica-lima-8ba677275" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </SocialIcon>

                    <SocialIcon href="https://github.com/jessicaccl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={24} />
                    </SocialIcon>

                    <SocialIcon href="jessica_cardoso12@yahoo.com.br" aria-label="E-mail">
                        <Mail size={24} strokeWidth={1.5} />
                    </SocialIcon>
                </SocialLinks>

                <Copyright>
                    © {currentYear} Jéssica Lima. Desenvolvido com React, TypeScript e visão de negócio.
                </Copyright>
            </FooterContent>
        </FooterContainer>
    );
}
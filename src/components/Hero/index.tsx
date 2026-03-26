import { motion } from 'framer-motion';
import minhaFotoLocal from '../../assets/perfil.jpeg';
import {
    HeroContainer,
    ProfileImage,
    NameTitle,
    Subtitle,
    Description,
    ActionButton
} from './styles';

interface HeroProps {
    onOpenJourney: () => void;
}

export function Hero({ onOpenJourney }: HeroProps) {

    return (
        <HeroContainer
            as={motion.section}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <ProfileImage
                src={minhaFotoLocal}
                alt="Jéssica Lima - Product Owner & Scrum Master"
            />

            <NameTitle>Jéssica Lima</NameTitle>

            <Subtitle>Full-Stack Developer | Product Owner & Scrum Master</Subtitle>

            <Description>
                Transformando experiência real em soluções digitais com propósito.
            </Description>

            <ActionButton
                onClick={onOpenJourney}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Ver a minha linha do tempo
            </ActionButton>
        </HeroContainer>
    );
}
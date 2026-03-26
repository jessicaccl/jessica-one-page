import { useState } from 'react';
import { Container, MainCard } from './styles';
import { Hero } from '../../components/Hero';
import { Trajectory } from '../../components/Trajectory';
import { Differentials } from '../../components/Differentials';
import { Vision } from '../../components/Vision';
import { Footer } from '../../components/Footer';
import { JourneyModal } from '../../components/JourneyModal';

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Container>
            <MainCard>
                <Hero onOpenJourney={handleOpenModal} />

                <Trajectory />
                <Differentials />
                <Vision />
                <Footer />
            </MainCard>

            <JourneyModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </Container>
    );
}
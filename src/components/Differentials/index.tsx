import { Target, Users, Ear, Scale } from 'lucide-react';
import {
    DifferentialsContainer,
    SectionTitle,
    GridContainer,
    DiffCard,
    CardHeader,
    IconWrapper,
    CardTitle,
    CardDescription
} from './styles';

export function Differentials() {
    const differentialsList = [
        {
            icon: Target,
            title: "Visão de Negócio",
            description: "Capacidade de traduzir objetivos comerciais complexos em User Stories claras e acionáveis para a equipe de desenvolvimento.",
            delay: 0.1
        },
        {
            icon: Ear,
            title: "Escuta Ativa",
            description: "Foco em entender a real dor do usuário antes de propor a solução, evitando desperdício de tempo e recursos.",
            delay: 0.2
        },
        {
            icon: Users,
            title: "Comunicação Eficaz",
            description: "Habilidade para ser a ponte tradutora entre os stakeholders de negócio e os engenheiros de software.",
            delay: 0.3
        },
        {
            icon: Scale,
            title: "Tomada de Decisão",
            description: "Priorização de Backlog baseada em valor real, métricas de negócio e capacidade técnica da equipe (Time Scrum).",
            delay: 0.4
        }
    ];

    return (
        <DifferentialsContainer>
            <SectionTitle>Os Meus Diferenciais</SectionTitle>

            <GridContainer>
                {differentialsList.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <DiffCard
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                        >
                            <CardHeader>
                                <IconWrapper>
                                    <Icon size={24} strokeWidth={1.5} />
                                </IconWrapper>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardDescription>{item.description}</CardDescription>
                        </DiffCard>
                    );
                })}
            </GridContainer>
        </DifferentialsContainer>
    );
}
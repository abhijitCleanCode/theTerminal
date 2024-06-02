import { Header as HeaderComponent, Features as FeaturesComponent, Articles as ArticlesComponent, CTA } from '../components';
import { StarsCanvas } from '../components/canvas';

const Home = () => {
    return (
        <>
            <div className='relative z-0'>
                <HeaderComponent />
                <StarsCanvas />
            </div>

            <FeaturesComponent />

            <ArticlesComponent />

            <CTA />
        </>
    )
}

export default Home
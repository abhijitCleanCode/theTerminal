import { Header as HeaderComponent, Features as FeaturesComponent, Articles as ArticlesComponent } from '../components';
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
        </>
    )
}

export default Home
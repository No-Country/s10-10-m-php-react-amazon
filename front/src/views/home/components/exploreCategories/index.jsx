import panaderia from '../../../../assets/panaderias.png'
import verduleria1 from '../../../../assets/verduleria1.png'
import verduleria2 from '../../../../assets/verdulerias2.png'
import superMercado from '../../../../assets/superMercado.png'
import Cards from './cards';
import SwipeableViews from "react-swipeable-views";



const ExploreCategories = () => {

    const handleSwipe = (index) => { };

    return (
        <div className=' pl-[2rem] mb-12'>
            <h2 className='font-bold text-colorNeutral1 text-left leading-none text-sizeSubtitle my-10'>
                Explora nuestros rubros
            </h2>

            <SwipeableViews className='w-96' enableMouseEvents onChangeIndex={handleSwipe} resistance>
                <Cards img={panaderia} title={"Panaderías"} />
                <Cards img={verduleria1} title={"Verdulerías"} />
                <Cards img={superMercado} title={"Supermercados"} />
            </SwipeableViews>


        </div >
    );
};

export default ExploreCategories;
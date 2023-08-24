import panaderia from '../../../../assets/panaderias.png'
import verduleria1 from '../../../../assets/verduleria1.png'
import verduleria2 from '../../../../assets/verdulerias2.png'
import superMercado from '../../../../assets/superMercado.png'

import Cards from './cards';

const ExploreCategories = () => {
    return (
        <div>
            <h2 className='font-bold text-mainColor  text-customSizeTitle my-10'>
                Explora nuestras categorías
            </h2>
            <section className='grid grid-cols-2 justify-items-center'>
                <Cards img={panaderia} title={"Panaderías"} />
                <Cards img={panaderia} title={"Verdulerías"} />
                <Cards img={panaderia} title={"Supermercados"} />
                <Cards img={panaderia} title={"Verdulerías"} />
            </section>
        </div>
    );
};

export default ExploreCategories;
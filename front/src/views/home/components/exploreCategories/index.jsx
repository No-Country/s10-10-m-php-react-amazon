import panaderia from '../../../../assets/panaderias.png'
import verduleria1 from '../../../../assets/verduleria1.png'
import verduleria2 from '../../../../assets/verdulerias2.png'
import superMercado from '../../../../assets/superMercado.png'

import Cards from './cards';

const ExploreCategories = () => {
    return (
        <div>
            <h2 className='font-bold text-mainColor leading-none text-customSizeTitle my-10'>
                Explora nuestras categorías
            </h2>
            <section className='grid grid-cols-2 justify-items-center'>
                <Cards img={panaderia} title={"Panaderías"} />
                <Cards img={verduleria1} title={"Verdulerías"} />
                <Cards img={verduleria2} title={"Supermercados"} />
                <Cards img={superMercado} title={"Verdulerías"} />
            </section>
        </div>
    );
};

export default ExploreCategories;
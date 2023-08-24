import panaderia from '../../../../assets/panaderias.png'

import Cards from './cards';

const ExploreCategories = () => {
    return (
        <div>
            <h2 className='font-bold text-mainTextColor text-customSizeTitle my-10'>
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
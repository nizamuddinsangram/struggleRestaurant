import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
  const [menu]=useMenu()
  const popularMenu=menu.filter(item=>item.category==='popular')




    return (
        <section className='mb-12'>
          <SectionTitle
           subHeading={"From our Menu "}
           heading={"Popular Menu"}
          ></SectionTitle>    
          <div className="grid md:grid-cols-2 gap-10">
            {
              popularMenu.map(item=><MenuItem
              key={item._id}
              item={item}

              ></MenuItem>)
            }
          </div>
          <button className='btn text-center mx-auto btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>

        </section>
    );
};

export default PopularMenu;
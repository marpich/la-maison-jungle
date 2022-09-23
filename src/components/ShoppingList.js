import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {

  const categories = []
  plantList.forEach(
		(plant) => {
      if (!categories.includes(plant.category)) {
        categories.push(plant.category);
      }
    })

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
            />
          </div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList

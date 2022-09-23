import '../styles/Cart.css'
import { useState } from 'react'



function Cart() {
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const monsteraPrice = 8

  return isOpen ? (
    <div className='lmj-cart'>
      <button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
      </ul>
      <button onClick={() => updateCart(cart + 1)}>
        Ajouter
      </button>
      Total : {monsteraPrice * cart}€
      <button onClick={() => updateCart(0)} >
        Vider le Panier
      </button>
    </div>

    ) : (
    <div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div> )
}

export default Cart

/*
 * Memorize the result of executing of a costly function to avoid a new call again.
 * Ensure if the benefit of memorizing is greater than recalculating
*/

import { useMemo, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: "Apple", price: 1.5 },
        { id: 2, name: "Pear", price: 2.0 },
        { id: 3, name: "Milk", price: 3.0 },
    ]);

    const [discount, setDiscount] = useState<number>(0);

    const totalCost = useMemo(() =>
        items.reduce((total, item) => total + item.price, 0),
        [items]
    );

    const finalCost = useMemo(() =>
        totalCost - discount,
        [totalCost, discount]
    );

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Product ${items.length + 1}`,
            price: Math.random() * 5
        }

        setItems([...items, newItem]);
    }

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {
                    items.map(item =>
                        <li key={item.id}>{item.name}: ${item.price.toFixed(2)}</li>
                    )
                }
            </ul>
            <p>Total cost: ${totalCost.toFixed(2)}</p>
            <p>
                <span>Discount: $</span>
                <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />
            </p>
            <p>Final Cost: ${finalCost.toFixed(2)}</p>
            <button type="button" onClick={addItem}>Add Product</button>
        </div>
    )
}

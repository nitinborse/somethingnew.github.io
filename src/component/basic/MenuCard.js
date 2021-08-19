import React from 'react'
const MenuCard = ({ MenuData }) => {
   //  console.log(MenuData)

    return (
        <>
           <section className="main-class-container">
                {
                    MenuData.map((curElem) =>
                    {
                        const{id,name,image,description,category}=curElem;
                        return (
                            <>
                             <div className="card-container" key={id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{id}</span>
                                            <span className="card-author subtle">{name}</span>
                                            <h2 className="card-title">{category}</h2>
                                            <span className="card-description subtle">{description}</span>
                                            <div className="card-read">{id}</div>
                                        </div>
                                        <img src={image} alt="receipe" className="card-media" />
                                        <span className="card-tag subtle">order now</span>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }        
        </section>
        </>
    )
}

export default MenuCard

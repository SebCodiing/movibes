import { useForm } from "react-hook-form";
// import { ImCheckboxChecked } from "react-icons/im";
import _ from "lodash";
import "./CheckBoxes.scss"

const CheckBoxes = () => {
  const { 
    register, 
    getValues, 
    setValue,
    formState: { errors }, 
  } = useForm({
    defaultValues: {
      action: true,
      adventure: true,
      animated: true,
      comedy: true,
      crime: true,
      fantasy: true,
    }
  });
  const handleChange = () => {
    // console.log("something changed");
    let values = getValues();
    // console.log(values);
  };
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("unchecking")
    let values = getValues();
    // console.log(values)
    _.map(values, (_, key) => {
      setValue(key, false);
    })
  }
  return (
    <div className='topfix'>
        <article className='inline__checkbox'>    
        <div className='checkbox__heading'>      
        <h3 className='genre__h3'>Categories</h3>      
        <button className='uncheck__btn' onClick={handleClick}>Uncheck all</button>      
        </div>    
        <section className='categories__genrepicker'>    
        <form className='formcheckbox2nd' onChange={handleChange}>    
        <article className='article__checkbox'>      
        <label htmlFor="action">Action</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Action" {...register("Action", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="adventure">Adventure</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Adventure" {...register("Adventure", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="animated">Animated</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Animated" {...register("Animated", {})} />      
        <hr />    </article>    <article className='article__checkbox'>      
        <label htmlFor="comedy">Comedy</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Comedy" {...register("Comedy", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="crime">Crime</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Crime" {...register("Crime", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="fantasy">Fantasy</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Fantasy" {...register("Fantasy", {})}  />       
        <hr />    
        </article>      
        <p className='seemore__btn'>See more</p>    
        </form>    
        </section>

        <div className='checkbox__heading '>      
        <h3 className='genre__h3'>Services</h3>      
        <button className='uncheck__btn' onClick={handleClick}>Uncheck all</button>      
        </div>         
        <section className='services__genrepicker'>    
        <form className='formcheckbox2nd' onChange={handleChange}>    
        <article className='article__checkbox'>      
        <label htmlFor="netflix">Netflix</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Action" {...register("Action", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="primevideo">Prime video</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Adventure" {...register("Adventure", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="disney">Disney +</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Animated" {...register("Animated", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="hbomax">HBO max</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Comedy" {...register("Comedy", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="hulu">Hulu</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Crime" {...register("Crime", {})} />      
        <hr />    
        </article>    
        <article className='article__checkbox'>      
        <label htmlFor="starz">Starz</label>      
        <input className='label__checkbox' type="checkbox" placeholder="Fantasy" {...register("Fantasy", {})} />      
        <hr />    
        </article>      
        <p className='seemore__btn'>See more</p>    
        </form>        
        </section>
        </article>   
        </div>   
       
        
    );
};


export default CheckBoxes;
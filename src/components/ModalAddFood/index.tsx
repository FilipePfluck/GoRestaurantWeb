import React, { useRef, useCallback, useState } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  category: Category;
  available: boolean;
}

type Category = 'massas' | 'carnes' | 'pizzas'



interface ICreateFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const [category, setCategory] = useState('' as Category)

  const handleSelectType = useCallback((type: Category)=>{
    setCategory(type)
  }, []) 

  const handleSubmit = useCallback(
    async (data: ICreateFoodData) => {
      await handleAddFood({
        ...data, 
        category
      })

      setIsOpen()
    },
    [handleAddFood, setIsOpen, category],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} type={category}>
        <h1>Novo Prato</h1>

        <div>
          <span>Imagem</span>
          <Input name="image" placeholder="Cole o link aqui" />
        </div>

        <div className="horizontal">
          <div>
            <span>Nome</span>
            <Input name="name" placeholder="Ex: Moda Italiana" />
          </div>

          <div>
            <span>Preço</span>
            <Input name="price" placeholder="Ex: 19.90" />
          </div>
        </div>

        <div>
          <span>Descrição</span>
          <Input name="description" placeholder="Descrição" />
        </div>

        <div className="categories">
          <div 
            id="massas" 
            onClick={() => handleSelectType("massas")}
          >
            <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/massas.png" alt="massas"/>
          </div>

          <div 
            id="pizzas" 
            onClick={() => handleSelectType("pizzas")}
          >
            <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/pizzas.png" alt="pizzas"/>
          </div>

          <div 
            id="carnes" 
            onClick={() => handleSelectType("carnes")}
          >
            <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/carnes.png" alt="carnes"/>
          </div>
        </div>
      
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;

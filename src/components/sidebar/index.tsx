"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import Section from "../section";
import {
  ExteriorColorsForEssetialType,
  PatternTypes,
  StandardMaterialPropsType,
} from "@/logic/constants/types";
import {
  setLeftDoorOpenOffset,
  setStartingPoint,
  updatePattern,
  updateSelectedColor,
} from "@/store/essential/essentialPatioDoorSlice";
import { useState } from "react";
import {
  ModelType,
  ModelsData,
  modelsData,
} from "@/logic/constants/doorModels";
import { ExteriorColorsForEssetial } from "@/logic/constants/materials";
import Image from "next/image";

const ButtonName: PatternTypes[] = [
  "Rectangular",
  "Cottage",
  "Prairie9",
  "Prairie6Top",
  "Prairie6Bottom",
  "Prairie6Right",
  "Prairie6Left",
];

function Sibebar() {
  const dispatch = useAppDispatch();
  const [sidebarStatus, setSidebarStatus] = useState<'closed-sidebar'|'opened-sidebar'>('closed-sidebar')
  const [pullbarStatus, setPullbarStatus] = useState<'closed-pullbar'|'opened-pullbar'>('closed-pullbar')
  const [tab, setTab] = useState('panels')
  const pattern = useAppSelector((state) => state.essentialPatioDoor);
  const leftDoorOpenOffset = useAppSelector(
    (state) => state.essentialPatioDoor.factors.leftDoorOpenOffset,
  );

  const toggleDoor = () => {
    let currentValue = leftDoorOpenOffset;
    const targetValue = currentValue === 0 ? 0.7 : 0;
    const step = currentValue === 0 ? 0.05 : -0.05;

    const interval = setInterval(() => {
      currentValue += step;
      if (
        (currentValue <= 0 && step < 0) ||
        (currentValue >= 0.7 && step > 0)
      ) {
        clearInterval(interval);
        currentValue = targetValue;
      }
      dispatch(setLeftDoorOpenOffset(currentValue));
    }, 50);
  };

  const changeModel: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // Ensure that e.target is an HTMLElement and has a name attribute
    const target = e.target as HTMLButtonElement;
    const modelName = target.name;
    const updatedArray = modelNameArray.map(size => ({
      ...size,
      selected: size.value === modelName,
    }));
    if (modelName) {
      // Access the corresponding model data
      const modelData: ModelType | undefined =
        modelsData[modelName as keyof ModelsData];

      if (modelData) {
        dispatch(setStartingPoint(modelData));
        setModelNameArray(updatedArray)
      } else {
        console.error("Model data not found for:", modelName);
      }
    } else {
      console.error("Event target does not have a name attribute");
    }
  };

  const handleClick = (colorKey: keyof ExteriorColorsForEssetialType): void => {
    const materialProps = ExteriorColorsForEssetial[colorKey];
    const updatedArray = colorsArray.map(color => ({
      ...color,
      selected: color.value === colorKey,
    }));
    setColorsArray(updatedArray)
    dispatch(updateSelectedColor(materialProps));
    // Now use this material for your mesh
  };


  interface Colors {
    name: string;
    value: "stoneWhite" | "cashmere" | "bronze" | "gunmetal" | "ebony";
    icon: string;
    selected: boolean;
  }

  const [colorsArray, setColorsArray] = useState<Colors[]>([
    { name: 'Stone White', value: 'stoneWhite', icon: '/icons/stoneWhite.svg', selected: false },
    { name: 'Cashmere', value: 'cashmere', icon: '/icons/cashmere.svg', selected: true },
    { name: 'Bronze', value: 'bronze', icon: '/icons/bronze.svg', selected: false },
    { name: 'Gun Metal', value: 'gunmetal', icon: '/icons/gunmetal.svg', selected: false },
    { name: 'Ebony', value: 'ebony', icon: '/icons/ebony.svg', selected: false },
  ])



  const [modelNameArray, setModelNameArray] = useState([{ name: '5068', value: "ESSPD5068", selected: true }, { name: '5080', value: "ESSPD5080", selected: false }, { name: '6068', value: "ESSPD6068", selected: false }, { name: '6080', value: "ESSPD6080", selected: false }, { name: '50610', value: "ESSPD50610", selected: false }, { name: '51068', value: "ESSPD51068", selected: false }, { name: '60610', value: "ESSPD60610", selected: false },])

  interface Muntin {
    name: string;
    value: PatternTypes;
    icon: string;
    selected: boolean;
  }
  const [muntinArray, setMuntinArray] = useState<Muntin[]>([
    { name: 'Rectangular', value: 'Rectangular', icon: '/icons/rectangular.svg', selected: true },
    { name: 'Prairie 9', value: 'Prairie9', icon: '/icons/prairie9.svg', selected: false },
    { name: 'Cottage', value: 'Cottage', icon: '/icons/cottage.svg', selected: false },
    { name: 'Prairie 6 Top', value: 'Prairie6Top', icon: '/icons/prairie6Top.svg', selected: false },
    { name: 'Prairie 6 Bottom', value: 'Prairie6Bottom', icon: '/icons/prairie6Bottom.svg', selected: false },
    { name: 'Prairie 6 Left', value: 'Prairie6Left', icon: '/icons/prairie6Left.svg', selected: false },
    { name: 'Prairie 6 Right', value: 'Prairie6Right', icon: '/icons/prairie6Right.svg', selected: false },
  ])


  const handleButtonClick = (selectedValue: PatternTypes) => {
    const updatedArray = muntinArray.map(muntin => ({
      ...muntin,
      selected: muntin.value === selectedValue,
    }));
    dispatch(updatePattern(selectedValue))
    setMuntinArray(updatedArray);
  };


  return (
    <>
      <div className={`overlay-sidebar ${sidebarStatus}`}>
        <div id="sidebar" className="sidebar">
          <div className="logo h-20">
            {/* <h2 className="logo-text">3D Configurator Demo</h2> */}
            <Image src={'/logo.svg'} alt="Pella Logo" width={200} height={150} /> 
          </div>

          {/* <h2 className="main-heading">Essential Collection</h2> */}
          <div className="section">
            <h2 className="section-heading">Panel Variations</h2>

            <div className="button-group">
              <button className="section-button selected">
                <Image
                  className="clickable"
                  src={'/icons/essential2panel.svg'}
                  alt="2 panel svg"
                  width={40}
                  height={40} />
                <div className="info">
                  <div id="door-info-message" className={`info__message`}>
                    <div className="info__message-text">
                      {"2 Panel Doors"}
                    </div>
                    <span className="info__message-arrow"></span>
                  </div>

                </div>
              </button>


              <button className="section-button inactive">
                <Image
                  className="clickable"
                  src={'/icons/essential3panel.svg'}
                  alt="3 panel svg"
                  width={40}
                  height={40} />
                <div className="info">
                  <div id="door-info-message" className={`info__message`}>
                    <div className="info__message-text">
                      {"Inactive"}
                    </div>
                    <span className="info__message-arrow"></span>
                  </div>

                </div>
              </button>


            </div>
          </div>

          <div className="divider"> </div>
          <div className="section">
            <h2 className="section-heading">Color Variations - {colorsArray.find((color) => color.selected === true)?.name}</h2>

            <div className="button-group">
              {colorsArray.map((color, index) =>
                <button key={index} className={`section-color-button ${color.selected && 'color-selected'}`} onClick={() =>
                  handleClick(color.value as keyof ExteriorColorsForEssetialType)
                }>
                  <Image
                    className="color-icon"
                    src={color.icon}
                    alt={color.name}
                    width={40}
                    height={40} />
                  <div className="info">
                    <div id="door-info-message" className={`info__message`}>
                      <div className="info__message-text">
                        {color.name}
                      </div>
                      <span className="info__message-arrow"></span>
                    </div>
                  </div>
                </button>)}
            </div>

          </div>

          <div className="divider"> </div>

          <div className="section">
            <h2 className="section-heading">Size Variations - {modelNameArray.find((model) => model.selected === true)?.value}</h2>

            <div className="button-group">

              {modelNameArray.map((size,index) =>
                <button key={index} name={size.value} className={`size-text-button ${size.selected && 'selected'}`} onClick={changeModel}>
                  {size.name}
                </button>)}

            </div>
          </div>


          <div className="divider"> </div>
          <div className="section">
            <h2 className="section-heading">Muntin Variations - {muntinArray.find((muntin) => muntin.selected === true)?.name}</h2>

            <div className="button-group">
              {muntinArray.map((muntin, index) =>
                <button key={index} className={`section-button ${muntin.selected && 'selected'}`} onClick={() => handleButtonClick(muntin.value)}>
                  <Image
                    className="clickable"
                    src={muntin.icon}
                    alt={muntin.name}
                    width={40}
                    height={40} />
                  <div className="info">
                    <div id="door-info-message" className={`info__message`}>
                      <div className="info__message-text">
                        {muntin.name}
                      </div>
                      <span className="info__message-arrow"></span>
                    </div>

                  </div>
                </button>)}
            </div>

          </div>
          <div className="divider"> </div>
          <div className="door-state">
            <button className="toggle-door-button" onClick={toggleDoor}>
              {`${leftDoorOpenOffset !== 0 ? "Close Door" : "Open Door"}`}
            </button>

          </div>
        </div>




        {/* <div className="sidebar"> */}
        <div className="toggle-sidebar-section">
          <button className={`toggle-sidebar-button ${sidebarStatus}`} onClick={() => setSidebarStatus(prev => prev === 'opened-sidebar' ? 'closed-sidebar' : 'opened-sidebar')}>
            <Image src={'/icons/arrow.svg'} alt="arrow" width={20} height={20} />
          </button>
        </div>


      </div>



      <div id="mobileDrawer" className={`mobile-drawer ${pullbarStatus}`}>
        <div className="pull-button">
          <div className={`pullbar-button ${pullbarStatus}`} onClick={() => setPullbarStatus(prev => prev === 'opened-pullbar' ? 'closed-pullbar' : 'opened-pullbar')}>
            <Image src={'/icons/arrow.svg'} alt="arrow" width={20} height={20} />
          </div>
        </div>


        <div className="main-pull-area">

          <div className="action-display">
         
            <p className="info-text">
            {tab === 'panels' ? 'Essential Collection 2 Panel':
            tab === 'sizes' ? `Model -  ${modelNameArray.find((model) => model.selected === true)?.value}`:
            tab === 'colors' ? `Color - ${colorsArray.find((color) => color.selected === true)?.name}`:
              `Mounting Pattern - ${muntinArray.find((muntin) => muntin.selected === true)?.name}`
            }
            </p>
            {/* <button className="toggle-door-button" onClick={toggleDoor}>
              {`${leftDoorOpenOffset !== 0 ? "Close Door" : "Open Door"}`}
            </button> */}
          </div>


          {tab === 'panels' ?
            <div className="panels-option-menu">
              <button className="section-button selected">
                <Image
                  className="clickable"
                  src={'/icons/essential2panel.svg'}
                  alt="2 panel svg"
                  width={40}
                  height={40} />
              </button>


              <button className="section-button inactive">
                <Image
                  className="clickable"
                  src={'/icons/essential3panel.svg'}
                  alt="3 panel svg"
                  width={40}
                  height={40} />
              </button>

            </div>
            :
            tab === 'sizes' ?
              <div className="sizes-option-menu">
                {modelNameArray.map((size,index) =>
                  <button key={index} name={size.value} className={`size-text-button ${size.selected && 'selected'}`} onClick={changeModel}>
                    {size.value}
                  </button>)}
              </div>
              :
              tab === 'colors' ?
                <div className="colors-option-menu">
                  {colorsArray.map((color, index) =>
                    <div key={index} className={`section-color-button ${color.selected && 'color-selected'}`} onClick={() =>
                      handleClick(color.value as keyof ExteriorColorsForEssetialType)
                    }>
                      <Image
                        className="color-icon"
                        src={color.icon}
                        alt={color.name}
                        width={40}
                        height={40} />
                    </div>)}
                </div>
                :
                <div className="colors-option-menu">
                  {muntinArray.map((muntin, index) =>
                    <button key={index} className={`section-color-button ${muntin.selected && 'color-selected'}`} onClick={() => handleButtonClick(muntin.value)}>
                      <Image
                        className="clickable"
                        src={muntin.icon}
                        alt={muntin.name}
                        width={40}
                        height={40} />
                    </button>)}
                </div>
          }

          <div className="section-select-menu">
            <button className={`menu-button ${tab === 'panels' ? 'selected' : ''}`} onClick={() => setTab('panels')}>
              Panels
            </button>
            <button className={`menu-button ${tab === 'colors' ? 'selected' : ''}`} onClick={() => setTab('colors')}>
              Colors
            </button>
            <button className={`menu-button ${tab === 'sizes' ? 'selected' : ''}`} onClick={() => setTab('sizes')}>
              Sizes
            </button>
            <button className={`menu-button ${tab === 'muntins' ? 'selected' : ''}`} onClick={() => setTab('muntins')}>
              Muntins
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sibebar;

import React, { useState, useEffect } from 'react';
import './App.css';
import { c } from 'ttag';

const Rating = ({ max = 5, onChange, value, className = 'mr-2' }) => {
  const stars = [];
  for (let index = 0; index < max; index++) {
    stars.push(<input key={index} type="checkbox" className={className} checked={index <= value} onChange={({ target }) => target.checked || index < value ? onChange(index) : onChange(index - 1)} />);
  }
  return <div>{stars}</div>;
};

const Field = ({ id = '', label = '', max = 5, labelClassName, placeholder = '', onChange, value, className, inputClassName, type = 'text' }) => {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
      {type === 'text' && <input type="text" className={inputClassName} id={id} onChange={onChange} placeholder={placeholder} value={value} />}
      {type === 'textarea' && <textarea className={inputClassName} rows="3" id={id} onChange={onChange} placeholder={placeholder} value={value} />}
      {type === 'rating' && <Rating max={max} className={inputClassName} onChange={onChange} value={value} />}
    </div>
  );
};

const CACHE_ITEM_KEY = 'vampireCharacterSheetModel';

function App() {
  const [model, setModel] = useState(() => localStorage.getItem(CACHE_ITEM_KEY) || {});

  useEffect(() => {
    // localStorage.setItem(CACHE_ITEM_KEY, JSON.stringify(model));
  }, [model]);

  return (
    <div className="container border">
      <h1 className="text-center text-uppercase">Vampire</h1>
      <p className="text-center text-uppercase">The masquerade</p>
      <div className="d-flex flex-column flex-md-row">
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Name`} id="name" value={model.name} onChange={({ target }) => setModel({ ...model, name: target.value })} />
        </div>
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Concept`} id="concept" value={model.concept} onChange={({ target }) => setModel({ ...model, concept: target.value })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Predator`} id="predator" value={model.predator} onChange={({ target }) => setModel({ ...model, predator: target.value })} />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Chronicle`} id="chronicle" value={model.chronicle} onChange={({ target }) => setModel({ ...model, chronicle: target.value })} />
        </div>
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Ambition`} id="ambition" value={model.ambition} onChange={({ target }) => setModel({ ...model, ambition: target.value })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Clan`} id="clan" value={model.clan} onChange={({ target }) => setModel({ ...model, clan: target.value })} />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Sire`} id="sire" value={model.sire} onChange={({ target }) => setModel({ ...model, sire: target.value })} />
        </div>
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Desire`} id="desire" value={model.desire} onChange={({ target }) => setModel({ ...model, desire: target.value })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <Field className="mb-2" inputClassName="form-control border-0" placeholder={c('Label').t`Generation`} id="generation" value={model.generation} onChange={({ target }) => setModel({ ...model, generation: target.value })} />
        </div>
      </div>
      <h4 className="text-center border-bottom text-uppercase">{c('Title').t`Attributes`}</h4>
      <div className="d-flex flex-column flex-md-row">
        <div className="pl-3 pr-3 flex-fill border-right">
          <p className="text-center font-italic">{c('Title').t`Physical`}</p>
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Strength`} value={model.strength} onChange={(strength) => setModel({ ...model, strength })} />
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Dexterity`} value={model.dexterity} onChange={(dexterity) => setModel({ ...model, dexterity })} />
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Stamina`} value={model.stamina} onChange={(stamina) => setModel({ ...model, stamina })} />
        </div>
        <div className="pl-3 pr-3 flex-fill border-right">
          <p className="text-center font-italic">{c('Title').t`Social`}</p>
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Charisma`} value={model.charisma} onChange={(charisma) => setModel({ ...model, charisma })} />
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Manipulation`} value={model.manipulation} onChange={(manipulation) => setModel({ ...model, manipulation })} />
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Compusure`} value={model.composure} onChange={(composure) => setModel({ ...model, composure })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <p className="text-center font-italic">{c('Title').t`Mental`}</p>
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Intelligence`} value={model.intelligence} onChange={(intelligence) => setModel({ ...model, intelligence })} />
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Wits`} value={model.wits} onChange={(wits) => setModel({ ...model, wits })} />
          <Field labelClassName="font-weight-bold mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Resolve`} value={model.resolve} onChange={(resolve) => setModel({ ...model, resolve })} />
        </div>
      </div>
      <h4 className="text-center border-bottom text-uppercase">{c('Title').t`Skills`}</h4>
      <div className="d-flex flex-column flex-md-row">
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Athletics`} value={model.athletics} onChange={(athletics) => setModel({ ...model, athletics })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Brawl`} value={model.brawl} onChange={(brawl) => setModel({ ...model, brawl })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Craft`} value={model.craft} onChange={(craft) => setModel({ ...model, craft })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Drive`} value={model.drive} onChange={(drive) => setModel({ ...model, drive })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Firearms`} value={model.firearms} onChange={(firearms) => setModel({ ...model, firearms })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Melee`} value={model.melee} onChange={(melee) => setModel({ ...model, melee })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Larceny`} value={model.larceny} onChange={(larceny) => setModel({ ...model, larceny })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Stealth`} value={model.stealth} onChange={(stealth) => setModel({ ...model, stealth })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Survival`} value={model.survival} onChange={(survival) => setModel({ ...model, survival })} />
        </div>
        <div className="pl-3 pr-3 flex-fill border-right">
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Animal Ken`} value={model.animalKen} onChange={(animalKen) => setModel({ ...model, animalKen })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Etiquette`} value={model.etiquette} onChange={(etiquette) => setModel({ ...model, etiquette })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Insight`} value={model.insight} onChange={(insight) => setModel({ ...model, insight })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Intimidation`} value={model.intimidation} onChange={(intimidation) => setModel({ ...model, intimidation })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Leadership`} value={model.leadership} onChange={(leadership) => setModel({ ...model, leadership })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Performance`} value={model.performance} onChange={(performance) => setModel({ ...model, performance })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Persuasion`} value={model.persuasion} onChange={(persuasion) => setModel({ ...model, persuasion })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Streetwise`} value={model.streetwise} onChange={(streetwise) => setModel({ ...model, streetwise })} />
          <Field className="d-flex justify-content-between" type="rating" label={c('Label').t`Subterfuge`} value={model.subterfuge} onChange={(subterfuge) => setModel({ ...model, subterfuge })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Academics`} value={model.academics} onChange={(academics) => setModel({ ...model, academics })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Awareness`} value={model.awareness} onChange={(awareness) => setModel({ ...model, awareness })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Finance`} value={model.finance} onChange={(finance) => setModel({ ...model, finance })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Investigation`} value={model.investigation} onChange={(investigation) => setModel({ ...model, investigation })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Medicine`} value={model.medicine} onChange={(medicine) => setModel({ ...model, medicine })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Occult`} value={model.occult} onChange={(occult) => setModel({ ...model, occult })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Politics`} value={model.politics} onChange={(politics) => setModel({ ...model, politics })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Science`} value={model.science} onChange={(science) => setModel({ ...model, science })} />
          <Field labelClassName="mr-2" className="d-flex justify-content-between" type="rating" label={c('Label').t`Technology`} value={model.technology} onChange={(technology) => setModel({ ...model, technology })} />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="pl-3 pr-3 flex-fill">
          <p className="text-center text-uppercase font-weight-bold">{c('Title').t`Health`}</p>
          <Field className="text-center" type="rating" max={10} value={model.health} onChange={(health) => setModel({ ...model, health })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <p className="text-center text-uppercase font-weight-bold">{c('Title').t`Willpower`}</p>
          <Field className="text-center" type="rating" max={10} value={model.willpower} onChange={(willpower) => setModel({ ...model, willpower })} />
        </div>
        <div className="pl-3 pr-3 flex-fill">
          <p className="text-center text-uppercase font-weight-bold">{c('Title').t`Humanity`}</p>
          <Field className="text-center" type="rating" max={10} value={model.humanity} onChange={(humanity) => setModel({ ...model, humanity })} />
        </div>
      </div>
      <h4 className="text-center border-bottom text-uppercase">{c('Title').t`Disciplines`}</h4>
      <div className="d-flex flex-column flex-md-row justify-content-around">
        <div className="pl-3 pr-3">
          <Field labelClassName="mr-2 text-uppercase font-weight-bold" inputClassName="form-control border-0" placeholder={c('Label').t`Resonance`} id="resonance" value={model.resonance} onChange={({ target }) => setModel({ ...model, resonance: target.value })} />
        </div>
        <div className="pl-3 pr-3">
          <Field className="d-flex" labelClassName="mr-2 text-uppercase font-weight-bold" type="rating" label={c('Label').t`Hunger`} value={model.hunger} onChange={(hunger) => setModel({ ...model, hunger })} />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">{c('Title').t`Chronicle tenets`}</th>
            <th className="text-center">{c('Title').t`Touchstones & Convictions`}</th>
            <th className="text-center">{c('Title').t`Clan Bane`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Field type="textarea" inputClassName="form-control" />
            </td>
            <td>
              <Field type="textarea" inputClassName="form-control" />
            </td>
            <td>
              <Field type="textarea" inputClassName="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React from 'react'
import slugify from 'slugify';
import Fieldset from '../Fieldset/Fieldset'
import Form from '../Form/Form'

class ItemForm extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <Fieldset 
          featureHash={featureHash}
          feature={feature}
          options={options}
        />
      );
    });

    return (
      <Form 
        features={features}
      />
    )
  }
}

export default ItemForm
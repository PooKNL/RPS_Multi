// src/recipes/GamesContainer.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import subscribeToRecipesService from '../actions/recipes/subscribe'
import Title from '../components/Title'
import GameItem from './GameItem'
import './GamesContainer.sass'

export class GamesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
    subscribeToRecipesService: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.subscribeToRecipesService()
  }

  renderRecipe(recipe, index) {
    return <GameItem key={ index } { ...recipe } liked={ false } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main className="container">
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, {
  fetchRecipes,
  subscribeToRecipesService
})(GamesContainer)

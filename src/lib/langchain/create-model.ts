import { ChatOpenAI } from '@langchain/openai'
import { OPENAI_DEFAULT_MODEL, OPENAI_DEFAULT_TEMPERATURE } from './constants'

/**
 * Function to create a ChatOpenAI model with default parameters.
 * @param {string} [model=OPENAI_DEFAULT_MODEL] - The model to use.
 * @param {number} [temperature=OPENAI_DEFAULT_TEMPERATURE] - The temperature for the model.
 * @returns {ChatOpenAI} The created ChatOpenAI model.
 */
const createModel = (
    model: string = OPENAI_DEFAULT_MODEL,
    temperature: number = OPENAI_DEFAULT_TEMPERATURE,
) =>
    new ChatOpenAI({
        model,
        temperature,
        // verbose: true,
    })

export default createModel

import { render } from 'ink'
import Main from './app/components/main'

/**
 * Entry point of the application, rendering the Main component.
 * @returns {JSX.Element} The rendered Main component.
 */
render(<Main />, { exitOnCtrlC: true })

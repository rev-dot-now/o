import agentExit from './agent-exit'
import commandExec from './command-exec'
import dirCreate from './dir-create'
import dirDelete from './dir-delete'
import dirRead from './dir-read'
import fileDelete from './file-delete'
import fileInfo from './file-info'
import fileRead from './file-read'
import fileRename from './file-rename'
import fileWrite from './file-write'

/**
 * Export of all tools for file and directory operations.
 */
const tools = [
	commandExec,
	dirCreate,
	dirDelete,
	dirRead,
	fileDelete,
	fileInfo,
	fileRead,
	fileRename,
	fileWrite,
	agentExit,
]

export default tools

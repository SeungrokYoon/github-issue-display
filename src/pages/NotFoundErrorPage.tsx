import ErrorNotice from '../components/ErrorNotice/ErrorNotice'
import { ERROR_MESSAGE } from '../components/ErrorNotice/constants'
import { ErrorPageProps } from '../components/ErrorNotice/types'

function NotFoundErrorPage({ errorType }: { errorType: ErrorPageProps }) {
  return (
    <ErrorNotice
      comment={ERROR_MESSAGE[errorType].COMMENT}
      subtitle={ERROR_MESSAGE[errorType].SUB_TITLE}
      title={ERROR_MESSAGE[errorType].TITLE}
    />
  )
}

export default NotFoundErrorPage

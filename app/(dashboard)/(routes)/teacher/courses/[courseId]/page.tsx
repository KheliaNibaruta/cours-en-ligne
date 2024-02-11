import React from 'react'

const Coursepage = ({
    params
}: {
    params: { courseId: string }
}) => {
  return (
    <div>
        Identifiant du cours : {params.courseId}
    </div>
  )
}

export default Coursepage
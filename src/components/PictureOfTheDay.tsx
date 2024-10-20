import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'

function PictureOfTheDay() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response: Response) => response.json())
      .then((data) => setPictureOfTheDay(data.url))
  }, [])

  return (
    <div className="picture-of-the-day">
      {loading && <Skeleton variant="rectangular" width="100%" height={300} />}
      <img
        src={pictureOfTheDay}
        alt="Sky today"
        style={{ display: loading ? 'none' : 'block', width: '100%' }}
        onLoad={() => setLoading(false)} // Hide the skeleton when image loads
      />
    </div>
  )
}

export default PictureOfTheDay

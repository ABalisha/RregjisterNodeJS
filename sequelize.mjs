import Sequelize from 'sequelize'

export const sequelize = new Sequelize('movedb','root','ardit1593573',{
    dialect:'mysql',
    host: 'localhost',
    define: {
        timestamps: false
      }
})
export default (sequelize, DataType) => {
    const Responsible = sequelize.define('responsible', {
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: {
                    args: true,
                    msg: "Este e-mail é inválido =("
                },
            },
            unique: {
                args: true,
                msg: "Este e-mail já está em uso =("
            }
        }
    })

    Responsible.associate = models => {
        Responsible.hasMany(models.teen);
        Responsible.hasMany(models.task);
        Responsible.hasMany(models.activity);
    }

    return Responsible;
}
TYPE ANNOTATIONS AND TYPE INFERENCE:
    TYPE ANNOTATIONS: Code we add to tell TS what type of value a variable refers to.
    TYPE INFERENCE: TS tries to figure out what it the type which is referred to by a variable.


    NOTES ON TYPE INFERENCE:
        >> const color = 'red';     // Variable Declaration = Variable Initialization.

        If declaration and initialization are on the same line, TS will figure out the type of "color" variable for us.
        We use Type Annotations when: we declare and initialize on the same line,
                                    : we want a variable to have a type that can't be inferred.
                                    : a function returns the "any" type and we need to clarify.

    NOTES ON THE "any" TYPE:
        It is a type.
        Means that TS has no idea what something is and can not check for correct property references.
        // WE WILL USUALLY TRY TO AVOID THIS.

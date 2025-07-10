#!/bin/bash

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    echo "Error: This script should be sourced, not executed directly."
    exit 1
fi

export OPENAI_API_KEY=$(op read "op://Employee/OpenAI Secret Key/credential") 